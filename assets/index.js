import jQuery from 'jquery';
import 'bootstrap';
import AnchorJS from 'anchor-js';
const anchors = new AnchorJS({
  placement: 'left'
});
anchors.add('.docs-section > h1, .docs-section > h2, .docs-section > h3, .docs-section > h4, .docs-section > h5');
