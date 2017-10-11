import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';
import {d3} from 'metal-charts';

import templates from './TooltipFormat.soy';

class TooltipFormat extends Component {}

const formatName = n => `Name ${n}`;

const formatTitle = d => `Data ${d}`;

const formatValue = (value, ratio, id) => {
	const format = id === 'data1' ? d3.format(',') : d3.format('$');
	return format(value);
};

TooltipFormat.STATE = {

 	/**
   	 * Function to format the tooltip name.
	 * @instance
 	 * @memberof TooltipFormat
 	 * @type {?function|undefined}
 	 * @default formatName
	 */
 	formatName: Config.func().value(formatName),

 	/**
   	 * Function to format the tooltip title.
	 * @instance
 	 * @memberof TooltipFormat
 	 * @type {?function|undefined}
 	 * @default formatTitle
	 */
 	formatTitle: Config.func().value(formatTitle),


 	/**
   	 * Function to format the tooltip value.
	 * @instance
 	 * @memberof TooltipFormat
 	 * @type {?function|undefined}
 	 * @default formatValue
	 */
 	formatValue: Config.func().value(formatValue),
 }

Soy.register(TooltipFormat, templates);

export default TooltipFormat;