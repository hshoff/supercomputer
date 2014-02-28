!function() {
  'use strict';

  var margin = {top: 0, right: 0, bottom: 0, left: 0},
      padding = {top: 0, right: 0, bottom: 0, left: 0},
      outerWidth = window.innerWidth,
      outerHeight = window.innerHeight,
      innerWidth = outerWidth - margin.left - margin.right,
      innerHeight = outerHeight - margin.top - margin.bottom,
      width = innerWidth - padding.left - padding.right,
      height = innerHeight - padding.top - padding.bottom;

  var x = d3.scale.identity()
      .domain([0, width]);

  var y = d3.scale.identity()
      .domain([0, height]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient('right');

  var svg = d3.select('body').append('svg')
      .attr('width', outerWidth)
      .attr('height', outerHeight)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  for (var i = 0; i < (outerWidth/50); i++) {
    for (var j = 0; j < (outerHeight/50); j++) {
      this.svg.append('rect')
        .attr('width', 2)
        .attr('height', 2)
        .attr('fill', function(d,k) {
          if (j % 2 != 0 && i % 2 != 0)
            return 'rgba(255,255,255,0.4)';
          return 'rgba(255,255,255,0.2)'
        })
        .attr('y', 50 * j + 25)
        .attr('x', 50 * i + 25);
    }
  }

}();