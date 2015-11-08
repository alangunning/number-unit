import clone from 'clone'

export default class ConversionUnit {
 constructor ({ from, to }) {
   this.from = from
   this.to = to
   this._parse('from')
   this._parse('to')
 }

 invert () {
   return new ConversionUnit({ from: this.to, to: this.from })
 }

 // awkward name for this method, TODO: come up with something better
 _parse (p) {
   let o = clone(this[p])
   delete o.unitType
   // if object has more than 'unitType' and 'unit', this may fail. TODO: make more robust
   let unit = Object.keys(o)[0]
   this[p + 'Unit'] = unit
   this[p + 'Value'] = o[unit]
 }
}