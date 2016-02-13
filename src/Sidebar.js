/* Represents sidebar with controls.
 */
function Sidebar(viz, params) {

  var row_order_controls = '' +
    '<div class="viz_medium_text">Row Order</div>' +
    ' <div class="btn-group toggle_col_order" data-toggle="buttons">' +
    '   <label class="btn btn-primary active order_name" name="clust_row">' +
    '     <input type="radio" name="options" autocomplete="off" checked > Cluster' +
    '   </label>' +
    '   <label class="btn btn-primary order_name"  name="rank_row">' +
    '     <input type="radio" name="options" autocomplete="off"> Rank' +
    '   </label>' +
    '</div>';


  var col_order_controls = '<div class="viz_medium_text">Column Order</div>' +
    '<div class="btn-group toggle_row_order" data-toggle="buttons" >' +
      '<label class="btn btn-primary active order_name" name="clust_col">' +
        '<input type="radio" name="options" autocomplete="off" checked > Cluster' + 
      '</label>' +
      '<label class="btn btn-primary order_name" name="rank_col">' +
        '<input type="radio" name="options" autocomplete="off" > Rank' +
      '</label>' +
    '</div>';

  var search_controls = '<div id="gene_search_container" class="row">' +
        '<input id="gene_search_box" type="text" class="form-control" placeholder="Input Gene">' +
        '<div id="gene_search_button" class="btn-group" data-toggle="buttons" >' +
          '<label id="submit_gene_button" class="btn btn-primary active">' +
            '<input type="radio" name="options" id="" autocomplete="off" checked > Search' +
          '</label>' +
        '</div>' +
    '</div>';

  var colorbar_sliders = '<p class="viz_medium_text">Row Group Size</p>' +
    '<div id="slider_row"></div>' +
    '<p class="viz_medium_text">Column Group Size</p>' +
    '<div id="slider_col"></div>';

  var N_row_sum = '<div class="viz_medium_text N_row_sum">Top rows: all rows </div>' +
    '<div class="slider_filter slider_N_row_sum"></div>';

  var sidebar = d3
    .select(params.root)
    .append('div')
    .attr('class', params.sidebar.sidebar_class )
    .style('margin-left','10px')
    .style('float', 'left');

  sidebar
    .append('div')
    .html(row_order_controls);

  sidebar
    .append('div')
    .html(col_order_controls);    

  sidebar
    .append('div')
    .html(search_controls);

  sidebar
    .append('div')
    .html(colorbar_sliders);

  sidebar
    .append('div')
    .html(N_row_sum);


  // 1. Recreate sidebar in JavaScript from HTML.
  // 2. Rename all IDs to classes.
  //    Don't forget load_clustergram.js
  // 3. Move behavior in load_clustergram.js to sidebar.js
  //    Example of advanced behavior:
  //
  //    if (params.use_controls) {
  //       sidebar.select(params.root).append('div').....

}