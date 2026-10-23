"""Check built pages for broken local navigation and accessible form names."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
from lxml import html

root = Path(__file__).resolve().parents[1]
pages = [root / 'index.html', *sorted((root / 'projects').glob('*.html'))]
trees = {path: html.fromstring(path.read_text()) for path in pages}
for path, tree in trees.items():
    assert len(tree.xpath('//h1')) == 1, path
    ids = tree.xpath('//*[@id]/@id')
    assert len(ids) == len(set(ids)), f'Duplicate id in {path}'
    assert '{{' not in path.read_text(), f'Unresolved template in {path}'
    for element in tree.xpath('//*[@href or @src]'):
        url = urlsplit(element.get('href') or element.get('src'))
        if url.scheme or url.netloc:
            continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert target.exists(), f'Missing {target} from {path}'
        if url.fragment and target.suffix == '.html':
            target_tree = trees.get(target)
            if target_tree is None:
                target_tree = html.fromstring(target.read_text())
            assert target_tree.xpath('//*[@id=$id]', id=url.fragment), f'Missing #{url.fragment} in {target}'
    for select in tree.xpath('//select'):
        assert tree.xpath('//label[@for=$id]', id=select.get('id')), f'Unnamed control in {path}'
    for anchor in tree.xpath('//a[@target="_blank"]'):
        assert 'noopener' in anchor.get('rel',''), path
print(f'PASS: {len(pages)} pages; headings, local links, fragments, form labels and external-link isolation.')
