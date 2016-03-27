// resize parent div
module.exports = function set_viz_wrapper_size(params) {

  // Create wrapper around SVG visualization
  if (d3.select(params.root+' .viz_wrapper').empty()){

    d3.select(params.root)
      .append('div')
      .classed('sidebar_wrapper', true);

    d3.select(params.root)
      .append('div')
      .classed('viz_wrapper', true);

  }

  // get outer_margins
  var outer_margins;
  if (params.viz.expand === false) {
    outer_margins = params.viz.outer_margins;
  } else {
    outer_margins = params.viz.outer_margins_expand;
  }

  if (params.viz.resize) {

    // get the size of the window
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;

    var cont_dim = {};
    cont_dim.width = screen_width - outer_margins.left - outer_margins.right;
    cont_dim.height = screen_height - outer_margins.top - outer_margins.bottom;

    // resize and position
    d3.select(params.viz.viz_wrapper)
      .style('float', 'left')
      .style('margin-top', outer_margins.top + 'px')
      .style('width', cont_dim.width + 'px')
      .style('height', cont_dim.height + 'px');

  } else {

    // position
    d3.select(params.viz.viz_wrapper)
      .style('float', 'left')
      .style('margin-top', outer_margins.top + 'px')
      .style('width','500px')
      .style('height','500px');
  }
};
