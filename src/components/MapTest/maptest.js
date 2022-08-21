import _ from 'lodash';
import '../../../node_modules/leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../assets/Tween.js';
import '../../assets/leaflet.curve.js';
import { BASE_COORDS } from '../../constants/map-constants';

export default {
  name: 'map-test',
  props: {
    latlong: {
      type: Array,
      default: [],
    },
    hasReset: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      map: null,
    };
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
  mounted() {
    this.map = L.map('mapContainer').setView(
      [BASE_COORDS.LAT, BASE_COORDS.LONG],
      8
    );
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane('customPane');
    var canvasRenderer = L.canvas({ pane: 'customPane' });
    customPane.style.zIndex = 9999; // put just behind the standard overlay pane which is at 400

    this.latlong.forEach(({ coords, id }) =>
      L.marker([coords[0], coords[1]]).addTo(this.map)
    );

    // L.marker([10, -25]).addTo(this.map);
    // L.marker([0, 0]).addTo(this.map);
    // var pathOne = L.curve(['M', [50, 14], 'Q', [53, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
    // L.curve(['M', [50, 14], 'Q', [52, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
  },
  methods: {
    addPopups(feature) {
      return (
        'Address: ' +
        feature.address +
        '</br>' +
        'RHC Value: $' +
        feature.appraisalSale.toLocaleString('en-Us') +
        '</br>' +
        '$/SqFt: $' +
        feature.rhcPsf.toLocaleString('en-Us') +
        '</p>'
      );
    },
  },
  watch: {
    latlong(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.map.setView([newVal[0].coords[0], newVal[0].coords[1]], 8);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        var customPane = this.map.createPane('customPane');
        var canvasRenderer = L.canvas({ pane: 'customPane' });
        customPane.style.zIndex = 9999; // put just behind the standard overlay pane which is at 400
        // var markers = L.markerClusterGroup();

        if (!this.hasReset) {
          // newVal.forEach((val) => console.log([val[0], val[1]]));
          newVal.forEach(({ coords, id }) =>
            L.marker([coords[0], coords[1]])
              .addTo(this.map)
              .bindPopup(this.addPopups(this.$store.state.features[id]))
              .openPopup()
          );
        } else if (this.hasReset) {
          const markers = document.querySelectorAll('.leaflet-marker-icon');
          const popups = document.querySelectorAll('.leaflet-popup');
          const shadows = document.querySelectorAll(
            '.leaflet-shadow-pane .leaflet-marker-shadow.leaflet-zoom-animated'
          );

          markers.forEach((marker) => marker.remove());
          popups.forEach((popup) => popup.remove());
          shadows.forEach((shadow) => shadow.remove());
        }
      }
    },
  },
};
