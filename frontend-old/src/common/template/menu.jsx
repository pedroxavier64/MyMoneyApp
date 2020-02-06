import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header">Main Navigation</li>
        <MenuItem path='#' icon='dashboard' label='Dashboard'/>
        <MenuTree icon='edit' label='Cadastro'>
            <MenuItem path='#billingCycles' icon='usd' label='Ciclo de Pagamentos'/>
        </MenuTree>
    </ul>
)