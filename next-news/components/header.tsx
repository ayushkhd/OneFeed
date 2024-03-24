import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="left">
        <Link href="/twitter" legacyBehavior>
          <a>
            <span className="logo">
              <Logo />
            </span>
          </a>
        </Link>
        <div className="nav">
          <Nav />
        </div>
      </div>

      <style jsx>{`
        header {
          background: #8fc7ff;
          display: flex;
          font-size: 14px;
          justify-content: center;
          align-items: center;
        }

        .logo {
          margin: 10px 10px 10px 10px;
          display: inline-block;
        }

        .left {
          flex: 9;
          justify-content: center;
          align-items: center;
        }

        .right {
          flex: 1;
          text-align: right;
        }

        .title {
          font-weight: bold;
          display: inline-block;
          font-size: 14px;
          text-decoration: none;
          padding: 8px 10px 8px 4px;
          color: #000;
          vertical-align: top;
        }

        .nav {
          display: inline-block;
          vertical-align: top;
        }

        @media (max-width: 750px) {
          .title {
            font-size: 16px;
            padding-bottom: 0;
          }

          .nav {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}
