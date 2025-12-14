// THE DATA
// people affected
const peopleData = {
  'Belgium': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 2, 2060: 3, 2070: 5, 2080: 7, 2090: 12, 2100: 18}, 
  'Bulgaria': {2000: 1, 2010: 1, 2020: 1, 2030: 1, 2040: 1, 2050: 1, 2060: 1, 2070: 1, 2080: 2, 2090: 2, 2100: 2}, 
  'Cyprus': {2000: 3, 2010: 4, 2020: 6, 2030: 8, 2040: 11, 2050: 16, 2060: 16, 2070: 16, 2080: 17, 2090: 17, 2100: 17}, 
  'Germany': {2000: 1, 2010: 2, 2020: 3, 2030: 4, 2040: 6, 2050: 10, 2060: 15, 2070: 23, 2080: 34, 2090: 51, 2100: 77}, 
  'Denmark': {2000: 1, 2010: 2, 2020: 2, 2030: 4, 2040: 6, 2050: 9, 2060: 17, 2070: 33, 2080: 62, 2090: 118, 2100: 225}, 
  'Estonia': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 0, 2060: 0, 2070: 0, 2080: 0, 2090: 0, 2100: 1}, 
  'Spain': {2000: 7, 2010: 12, 2020: 20, 2030: 33, 2040: 56, 2050: 94, 2060: 120, 2070: 154, 2080: 197, 2090: 252, 2100: 322}, 
  'Finland': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 2, 2060: 4, 2070: 6, 2080: 11, 2090: 20, 2100: 36}, 
  'France': {2000: 3, 2010: 5, 2020: 9, 2030: 16, 2040: 28, 2050: 50, 2060: 75, 2070: 112, 2080: 168, 2090: 252, 2100: 377}, 
  'Greece': {2000: 10, 2010: 14, 2020: 21, 2030: 30, 2040: 44, 2050: 64, 2060: 75, 2070: 87, 2080: 102, 2090: 119, 2100: 139}, 
  'Croatia': {2000: 12, 2010: 15, 2020: 19, 2030: 24, 2040: 30, 2050: 38, 2060: 41, 2070: 44, 2080: 47, 2090: 50, 2100: 54}, 
  'Ireland': {2000: 3, 2010: 5, 2020: 9, 2030: 14, 2040: 24, 2050: 41, 2060: 58, 2070: 82, 2080: 115, 2090: 163, 2100: 230}, 
  'Italy': {2000: 13, 2010: 20, 2020: 32, 2030: 49, 2040: 76, 2050: 119, 2060: 150, 2070: 188, 2080: 237, 2090: 298, 2100: 375}, 
  'Lithuania': {2000: 1, 2010: 1, 2020: 2, 2030: 2, 2040: 2, 2050: 3, 2060: 3, 2070: 4, 2080: 5, 2090: 5, 2100: 6}, 
  'Latvia': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 0, 2060: 0, 2070: 0, 2080: 0, 2090: 0, 2100: 1}, 
  'Malta': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 0, 2060: 0, 2070: 0, 2080: 0, 2090: 0, 2100: 0}, 
  'Netherlands': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 0, 2060: 0, 2070: 0, 2080: 0, 2090: 0, 2100: 2}, 
  'Norway': {2000: 2, 2010: 4, 2020: 7, 2030: 13, 2040: 23, 2050: 43, 2060: 69, 2070: 111, 2080: 179, 2090: 289, 2100: 465}, 
  'Poland': {2000: 10, 2010: 11, 2020: 13, 2030: 15, 2040: 17, 2050: 20, 2060: 24, 2070: 28, 2080: 33, 2090: 39, 2100: 46}, 
  'Portugal': {2000: 3, 2010: 4, 2020: 5, 2030: 6, 2040: 8, 2050: 10, 2060: 12, 2070: 15, 2080: 19, 2090: 23, 2100: 29}, 
  'Romania': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 1, 2060: 1, 2070: 1, 2080: 2, 2090: 2, 2100: 2}, 
  'Sweden': {2000: 0, 2010: 0, 2020: 0, 2030: 0, 2040: 0, 2050: 4, 2060: 8, 2070: 14, 2080: 28, 2090: 53, 2100: 100}, 
  'Slovenia': {2000: 2, 2010: 2, 2020: 3, 2030: 3, 2040: 4, 2050: 5, 2060: 6, 2070: 7, 2080: 8, 2090: 9, 2100: 10}, 
  'UK': {2000: 28, 2010: 42, 2020: 62, 2030: 93, 2040: 139, 2050: 208, 2060: 291, 2070: 408, 2080: 571, 2090: 799, 2100: 1118}
};

// the rise of sea
const seaData = {
  2020: 0.05,
  2030: 0.098,
  2040: 0.157,
  2050: 0.232,
  2060: 0.31,
  2070: 0.404,
  2080: 0.509,
  2090: 0.633,
  2100: 0.766,
}


// SETTING UP THE MAP
const svg = d3.select("#map");
const width = svg.node().getBoundingClientRect().width;
const height = svg.node().getBoundingClientRect().height;

const projection = d3.geoOrthographic()
  .scale(250)
  .translate([width / 2, height / 2])
  .rotate([-15, -52]) // focus on Europe
  .clipAngle(90);

const path = d3.geoPath(projection);

// ääriviivat ja meren täyttö
svg.append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", projection.scale())
  .attr("fill", "rgb(154, 174, 246)")
  .attr("stroke", "#001a33");

// HOVERING 
const tooltip = d3.select("#tooltip");

// RISING WATER
const water = svg.append("rect")
    .attr("x", 0)
    .attr("y", height)
    .attr("width", width)
    .attr("height", 0)
    .attr("fill", "rgba(30, 80, 255, 0.45)")
    .attr("clip-path", "url(#globeClip)")
    .style("pointer-events", "none");

// adds countries and their interactions
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(world => {
    svg.append("g")
        .selectAll("path")
        .data(world.features)
        .join("path")
        .attr("d", path)
        .attr("fill", d => "#5e884cff")
        .attr("stroke", "#001a33")
        // hovering
        .on("mousemove", (event, d) => {
            const country = d.properties.name;
            const year = +d3.select("#slider").property("value");
            const data = peopleData[country] ? peopleData[country][year] : 0;
            tooltip.style("opacity", 1)
                    .html(`<b>${country}</b><br>Population displaced: (${year}): ${data}`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY + 10) + "px")
                    .style("z-index", 100);
        })
        .on("mouseout", () => tooltip.style("opacity", 0));

    // animating slider
    d3.select("#slider").on("input", function() {
        const year = +this.value;
        d3.select("#yearLabel").text(`Year: ${year}`);
        updateColors(year);
        updateSeaLevelBar(year);
    });

    let currYear = 2000;
    let dir = 10;

    function animateSlider() {
        currYear += dir;
        if (currYear >= 2100 || currYear <= 2000) {
        currYear = 2000;
        }

        d3.select('#slider').property('value', currYear);
        d3.select('#yearLabel').text(`Year: ${currYear}`);
        updateColors(currYear);
        updateWater(currYear);

        setTimeout(animateSlider, 1000);
    }
    animateSlider();

    function updateColors(year) {
        svg.selectAll("path")
        .transition()
        .duration(500)
        .attr("fill", d => {
            const country = d.properties.name;
            const val = peopleData[country] ? peopleData[country][year] : 0;
            return d3.interpolateRgb("#5e884cff", "#C82909")(Math.min(val / 300, 1));
      });
    }

    // WATER ANIMATION
    function updateWater(year) {
        const seaLevel = seaData[year];
        if (seaLevel == null) return;

        const maxSeaLevel = 0.5;

        const waterHeight = d3.scaleLinear()
            .domain([0, maxSeaLevel])
            .range([0, height * 0.6])(seaLevel);

        water  
            .transition()
            .duration(600)
            .attr('y', height - waterHeight)
            .attr('height', waterHeight);

        const pageWaterHeight = d3.scaleLinear()
            .domain([0, maxSeaLevel])
            .range([0, window.innerHeight])(seaLevel);

        d3.select("#pageWater")
        .transition()
        .duration(600)
        .style("height", `${pageWaterHeight}px`);
    }

});
