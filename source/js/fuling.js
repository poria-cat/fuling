hljs.configure({useBR: true});

$('td.code').each(function(i, block) {
  hljs.highlightBlock(block);
});