import React, {Component} from 'react';
export default class ScrollToTop extends Component {
    render() {
        return (
            <button onClick={() => this.handleScroll()}>ScrollToTop</button>
        )
    }
    handleScroll() {
        // 点击a之后， 先让浏览器滚动好，然后再作这个偏移，所以需要setTimeout
        setTimeout(function () {
            window.scrollTo(0, 0)
        }, 100);
    }
}
