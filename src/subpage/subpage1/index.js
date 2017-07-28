import React from 'react'
import {Button,Modal,Icon,Anchor} from 'antd'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'
import './index.css'
const{Link}=Anchor;
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

/*------加载按钮------- */

  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }



    render() {
        return (
            <div>
                <Anchor 
                    offsetTop={100}
                    className="btn-anchor">
                    <h2 className="anchor-title">请叫我锚点</h2>
                    <Link href="#btnOne" title="Basic demo" />
                    <Link href="#btnTwo" title="Fixed demo" />
                    <Link href="#btnThree" title="API">
                    <Link href="#btnFour" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                    </Link>
                </Anchor>
                <h1>Subpage1</h1>
                
                <div className="btn-contain" id="btnOne">
                    <h4> 水一句: jsx里面的style大多数是对象的属性，键值对，值一般又是字符串，之间以 ， 间隔 <br/>
                                 .scss、.css内部以值的形式，而且不是对象，以  ; 间隔
                    </h4>
                    <Button type="primary" ghost
                    //有三种写法，优先es6
                    onClick={()=>{this.handleShowModal()}}
                    
                    // onClick={this.handleShowModal.bind(this)}
                        >Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                </div>

               

                <div  className="btn-contain" id="btnTwo" >
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
              
                <div  className="btn-contain" id="btnThree">
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
                </div>
                <div  className="btn-contain" id="btnFour">
                    <Button type="primary" loading>
                    Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                    Loading
                    </Button>
                    <br />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                    Click me!
                    </Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                    Click me!
                    </Button>
                    <br />
                    <Button shape="circle" loading />
                    <Button type="primary" shape="circle" loading />
                </div>
                <Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
                <Icon type="chrome" spin={true} style={{fontSize:32,color:'#08c'}}/> 
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