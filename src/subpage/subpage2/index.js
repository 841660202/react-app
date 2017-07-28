import React from 'react'
import {Steps, Icon,Button,message} from 'antd'
import './index.css'
const {Step} = Steps
class Subpage2 extends React.Component {

    render() {
        return (
            <div>
                <Steps current={2}>
                    <Step className="step" title="Login" icon={< Icon type = "user" />}/>
                    <Step className="step" title="Verification" icon={< Icon type = "solution" />}/>
                    <Step className="step" title="Pay" icon={< Icon type = "credit-card" />}/>
                    <Step className="step" title="Done" icon={< Icon type = "smile-o" />}/>
                </Steps>
                <hr/>
                <Smart/>
            </div>

        )
    }
}
const steps = [
    {
        title: 'Login',
        content: 'First-content',
        iconName:'user'
    }, {
        title: 'Verification',
        content: 'Second-content',
        iconName:'solution'
        
    }, {
        title: 'Pay',
        content: 'Three-content',
        iconName:'credit-card'
        
    }
    , {
        title: 'Done',
        content: 'Last-content',
        iconName:'smile-o'
        
    }
];

class Smart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }
    render() {
        const {current} = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => 
                         <Step 
                            className="step" 
                            key={item.title} 
                            title={item.title} 
                            icon={< Icon type = {item.iconName} />}
                         />
                        )
                    }
                </Steps>
                <div className="steps-content">
                    {steps[this.state.current].content}
                     {this.state.current < steps.length - 1 && //还没完可以继续加
                        <Button className="pos-abs" type="primary" onClick={() => this.next()}>
                            下一个
                        </Button>
                    }
                     {/*next 与 done不并存*/}
                    {this.state.current === steps.length - 1 &&//完了
                        <Button className="pos-abs"  type="primary" onClick={() => message.success('Processing complete!')}>
                            完成
                        </Button>
                    }
                    {this.state.current > 0 && //当前步骤大于零，可以回退
                        <Button className="pos-abs-50"  style={{ marginLeft: 8}}onClick={() => this.prev()}>
                            回退一下
                        </Button>
                    }
                </div>
                <div className="steps-action">
                   
                    {/*next 与 done不并存*/}
                    {/*{this.state.current === steps.length - 1 &&//完了
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            完成
                        </Button>
                    }
                    {this.state.current > 0 && //当前步骤大于零，可以回退
                        <Button style={{ marginLeft: 8}}onClick={() => this.prev()}>
                            回退一下
                        </Button>
                    }*/}
                </div>
            </div>
        );
    }
}

export default Subpage2