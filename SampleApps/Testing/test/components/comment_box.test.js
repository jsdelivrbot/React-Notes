import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	it('has a css class of comment-box', () => {
		expect(component).to.have.class('comment-box');
	});
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});
});
