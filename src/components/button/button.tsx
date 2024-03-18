import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'custom-radio',
  shadow: true,
})
export class Radio {
	/**
	 * Whether or not the radio is disabled.
	 */
	@Prop() disabled = false;

	render() {
		return this.disabled ? 'disabled' : 'not disabled';
	}
}
