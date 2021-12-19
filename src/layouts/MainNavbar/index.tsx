import React from 'react'
import stg from 'utils/strings'
import SearchIcon from '../../assets/img/search.svg'
interface Props {}

const MainNavbar = (props: Props) => {
  return (
    <nav className="nav w-full" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">{stg('rule_of_thumb')}</h1>
        <button className="nav__hamburger icon-button" aria-label="Open Menu">
          <svg width={25} height={20} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <a href="#">{stg('past_trials')}</a>
          </li>
          <li>
            <a href="#">{stg('how_it_works')}</a>
          </li>
          <li>
            <a href="#">{stg('login_signup')}</a>
          </li>
          <li>
            <form action="javascript:void(0)">
              <input
                className="nav__search-input"
                aria-label="search"
                type="text"
              />
              <button
                className="nav__search icon-button"
                aria-label="Search"
                type="submit"
              >
                <img src={SearchIcon} alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MainNavbar
