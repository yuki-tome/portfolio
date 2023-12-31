import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <Link to="/">
                <h3>ポートフォリオ</h3>
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">ホーム</Link>
                </li>
{/*                 <li>
                    <Link to="/blog">ブログ</Link>
                </li> */}
                <li>
                    <Link to="https://github.com/yuki-tome">SNS</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header