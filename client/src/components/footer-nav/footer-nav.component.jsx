import React, {useState} from 'react'
import IconsLogo from '../icons-logo/icons-logo.component'

const FooterNav = () => {

    const [iconsFooter] = useState({
        icons: [
            {
                id: 1,
                img: '/images/icons/icon_facebook.png',
                alt: 'Facebook',
                link: 'https://www.facebook.com'
            },
            {
                id: 2,
                img: '/images/icons/icon_insta.png',
                alt: 'Instagram',
                link: 'https://instagram.com'
            },
            {
                id: 3,
                img: '/images/icons/icon_pint.png',
                alt: 'Pinterest',
                link: 'https://www.pinterest.com'
            },
            {
                id: 4,
                img: '/images/icons/icon_twitter.png',
                alt: 'Twitter',
                link: 'https://twitter.com'
            }
        ]

    })

    const { icons } = iconsFooter

    return (
        <nav className="bottom__icons icons">
            {icons.map(({id, ...rest}) => (
                <IconsLogo key={id} { ...rest }/>
            ))}
        </nav>
    )
}

export default FooterNav
