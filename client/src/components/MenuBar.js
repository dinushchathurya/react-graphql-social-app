import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function MenuBar(){

    const [activeItem, setActivItem ] = useState('');
    const handleItemClick = (e, { name }) => setActivItem(name);

    return (
        <Menu secondary>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBar;