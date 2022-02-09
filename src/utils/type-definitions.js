// /**
//  *@typedef Properties
//  * @type {object}
//  * @property {string} address - short address.
//  * @property {string} parcelId - parcel id of property.
//  * @property {string} zipCode - zipCode of property.
//  * @property {string} pricePerSqFt - price per square foot  of property.
//  * @property {string} appraisedValue - appraised value  of property.
//  */
// /**
//
// /**
//  * @typedef Feature
//  * @type{object}
//  * @property {Properties} feature.properties
//  */

export class Geometry {
  type = "";
  coordinates = [];
}

/**
 * @class FeatureProperties @property {string} address - short address.
 * @property {string} parcelId - parcel id of property.
 * @property {string} address - address of property.
 * @property {?string} zipCode - zipCode of property.
 * @property {?string} pricePerSqFt - price per square foot  of property.
 * @property {string} appraisedValue - appraised value  of property.
 * @property {string} taxDistrict - tax district of property.
 *
 */
export class FeatureProperties {
  parcelId = "";
  address = "";
  zipCode = "";
  pricePerSqFt = "";
  appraisedValue = "";
  taxDistrict = "";
  constructor(...args) {
    console.log("ARGS ", args);
    Object.assign(this, ...args);
    console.log("FeatureProperties CONSTRUCTOR", this);
  }
}

/**
 @typedef Rows
 @type {Array<FeatureProperties>}
 */
export let Rows = Array.of(new FeatureProperties());

/**
 * @class Feature
 * @alias RhcFeature
 * @property {string} type
 * @property {Geometry} geometry
 * @property {FeatureProperties} properties
 */
export class Feature {
  type = "";
  geometry = new Geometry();
  properties = new FeatureProperties();

  constructor(type, geometry, properties) {
    this.type = type || "feature";
    this.geometry = geometry || new Geometry();
    this.properties = properties || new FeatureProperties();
  }
}
