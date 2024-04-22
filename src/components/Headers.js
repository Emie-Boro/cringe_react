import { Link } from "react-router-dom"

const Headers = () => {
  return (
    <div>
        <header>
            <img src="/images/logo.png" alt="" class="logo1" />

            <div class="header-aside">
                <Link to={'/search'}><i class="fas fa-search"></i></Link>
                <i class="fas fa-bell"></i>
                <img src="/images/profile.png" alt="" />
            </div>
        </header>
        <nav>
            <div class="logo2">
                <img src="/images/logo.png" alt="" />
            </div>
            <div class="mobile-nav">
                <a href="/">
                <div class="nav-icon active">
                    <img src="/images/home.png" alt="" />
                </div>
                </a>
                <a href="">
                <div class="nav-icon">
                    <img src="/images/heart.png" alt="" />
                </div>
                </a>
                <a href="">
                <div class="nav-icon">
                    <img src="/images/categories.png" alt="" />
                </div>
                </a>
                <a href="">
                <div class="nav-icon">
                    <img src="/images/watchlist.png" alt="" />
                </div>
                </a>
            </div>

            <div class="logo3">
                <a href="">
                <div class="nav-icon">
                    <img src="/images/settings.png" alt="" />
                </div>
                </a>
                <div class="nav-icon red-btn">
                <img src="/images/logout.png" alt="" />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Headers
