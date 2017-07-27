import React from 'react'
import {Button,Modal} from 'antd'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index';
import './index.css';
class Subpage1 extends React.Component {
  handleShowModal() {
      console.info(123)
    //this.setState({ loading: true });
    this.props.actions.ShowModal(1,'哇哇哇哇');//触发dispatch
  }
  handleHideModal() {
    //this.setState({ visible: false });
    this.props.actions.HideModal();//触发dispatch
  }
    render() {
        return (
            <div>
                <h1>Subpage1</h1>

                <div className="contain">
                    <Button type="primary" ghost
                    //有三种写法，优先es6
                    onClick={()=>{this.handleShowModal()}}
                    
                    // onClick={this.handleShowModal.bind(this)}
                        >Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                </div>

                <hr/>

                <div  className="contain">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>

                 <Modal
                    visible={this.props.modalDialog.visable}
                    title={this.props.modalDialog.title}
                    onOk={()=>this.handleHideModal()}
                    onCancel={()=>this.handleHideModal()}
                    footer={[]}
                    >
                   
                </Modal>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
  //console.log('ModalDialog : mapStateToProps,state is ',state);
    return { modalDialog: state.stores.modalDialog }
}
const mapDispatchToProps = (dispatch) => {
  //console.log('mapDispatchToProps');
    return {
        actions: bindActionCreators(actions, dispatch),//将行为与dispatch 绑定
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Subpage1)