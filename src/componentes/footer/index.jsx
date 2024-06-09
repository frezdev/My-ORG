import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/kimberlyssb/'>
                <img src="/img/link_icon.png" alt='linkedin' />
            </a>
            <a href='https://github.com/Kimberlyssb'>
                <img src="/img/git_ic.png" alt='Github' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Kimberly Soto </strong>
    </footer>
}

export default Footer