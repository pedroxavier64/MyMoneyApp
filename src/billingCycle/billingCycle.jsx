import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
// import Row from '../common/layout/'

export default class BillingCycle extends Component {
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
                            Teste
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}