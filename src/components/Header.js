import { useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import PropTypes from 'prop-types'

const Header = ({ activeTitle, onMenuChange }) => {

    const [_activeTitle, setActiveTitle] = useState(activeTitle);

    const [menuItems] = useState([
        {
            title: "Ülkelere Göre Corona Değeleri",
            value: 1
        },
        {
            title: "Kayda Geçmiş Tüm Coraon Değerleri",
            value: 2
        },
        {
            title: "Kıtalara Göre Corona Değeleri",
            value: 3
        }
    ])

    return (
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo />
                <div className="w-auto block">
                    <ul className="flex flex-row mt-4 font-semibold text-xs space-x-8 mt-0">

                        {menuItems.map((item) => {
                            return (
                                <MenuItem key={item.title} active={item.title === _activeTitle} title={item.title} onClick={(title) => {
                                    setActiveTitle(title);
                                    onMenuChange(item.value);
                                }} />
                            )
                        })}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func
}

Header.defaultProps = {
    activeTitle: "Ülkelere Göre Corona Değeleri",
    onMenuChange: () => null
}

export default Header;