export default function HeroSection() {
    return (
        
            <section className="hero">

                <section className="hero-content">
                    <p className="fs-lg gradient-text"> For freelancers, developer teams, creatives and construction crews all over the world</p>

                    <h1 className="fs-2xl">We hold your project funds securely <span className="gradient-text">IN ESCROW </span>
                        and pay your team once their tasks are completed..</h1>

                    <div className="info-button">
                        <img className="apple-logo" src="src/assets/applelogo.png" alt="Appstore Icon"/>
                            <div className="info-status">
                                <p style={{ fontSize: '10px'}}> ESCROW STATUS </p>
                                <p style={{ fontSize: '18px', color: '#feb47b' }}> 14700 projects secured </p>
                            </div>
                    </div>
                </section>

                <section className="hero-image">
                    <img className="img" src="src/assets/escrow.png" alt=""/>
                </section>

            </section>
    )
}