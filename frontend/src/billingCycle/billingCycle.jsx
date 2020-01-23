import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from '../billingCycle/billingCycleList'
import Form from '../billingCycle/billingCycleCreate'
import {selectTab, showTabs} from '../common/tab/tabActions'
import {create} from '../billingCycle/billingCycleActions'
// import Row from '../common/layout/'

class BillingCycle extends Component {
    
    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Versão 1.0"/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader icon="bars" label="Listar" target="tabList"/>
                            <TabHeader icon="plus" label="Incluir" target="tabCreate"/>
                            <TabHeader icon="pencil" label="Atualizar" target="tabUpdate"/>
                            <TabHeader icon="trash" label="Excluir" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id="tabUpdate"><h1>Update</h1></TabContent>
                            <TabContent id="tabDelete"><h1>Delete</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps) (BillingCycle)