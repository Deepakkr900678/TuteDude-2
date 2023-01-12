import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import "./Header.css"

export default function Header() {
    return (
        <>
            <div className=''>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <img className='tutedude' alt="tutedude" src={require('./TuteDude.png')} />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="ml-auto mb-2 mb-lg-0">
                            <Nav.Link className='nav' style={{ color: "rgba(128, 0, 128, 0.25)" }}>My Assignment</Nav.Link>
                            <Nav.Link className='nav' style={{ color: "rgba(128, 0, 128, 0.25)" }}>Chat with Mentor</Nav.Link>
                            <span class="material-symbols-outlined contact">
                                account_circle
                            </span>
                            <NavDropdown className='profile' title="ProfileName" id="basic-nav-dropdown">
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className='refer'>
                <h6>UI/UX &gt; Refer & Earn</h6>
            </div>
            <div className="card-deck">
                <div><Card style={{ width: '30rem'}} className="col-md-4 col-10 mx-auto card2">
                    <Card.Body className='cardname'>
                        <div className='header'>
                            <div className='ref1'>
                                    <p className='wallet'>Referral Earning</p>
                                <h5 className='number'>₹ 2,500</h5>
                            </div>
                            <div className='ref2'>
                                <p className='wallet'>Total Referrals</p>
                                <h5 className='numberone'>7</h5>
                            </div>
                            <div className='ref3'>
                                <p className='wallet'>Wallet Balance</p>
                                <h5>₹ 500</h5>
                            </div>
                        </div>

                        <button className="button">Withdraw Balance</button>
                        <div>
                            <span className='date'>Referal Amount</span> <strong className='date'>₹485</strong>
                        </div>
                    </Card.Body>
                </Card></div>
                <div className='box'>
                    <span style={{ float: "left", marginTop: '-10px' }}>
                        <strong className='referral'> Your Referral Code</strong>
                        <Card style={{ width: '20rem', marginLeft: '100px' }}>
                            <Card.Body><h5><pre>E    D    C    H    5    4</pre></h5></Card.Body>
                        </Card>
                    </span>
                </div>

            </div>

            <div className="friend">
                <h3>How does it work ?</h3>
            </div>
            <div className="container">
                <div className='first'>
                    <div className='logo'>
                        <span class="material-symbols-outlined name">
                            groups
                        </span>
                        <strong>Invite your Friends</strong>
                        <h6>Share the link tutedude.com with <br />
                            your friends</h6>
                    </div>
                    <div className='logo'>
                        <span class="material-symbols-outlined name">
                            currency_rupee
                        </span>
                        <strong>You get ₹ 200 as referral money</strong>
                        <h6>On total purchase the friend<br />
                            makes, into your wallet</h6>
                    </div>
                    <div className='logo'>
                        <span class="material-symbols-outlined name">
                            account_balance_wallet
                        </span>
                        <strong>Transfer money from wallet</strong>
                        <h6>When the wallet balance reaches <br />
                            ₹200 or more, you can withdraw it</h6>
                    </div>
                </div>
                <div className='container-two'>
                    <div className='logo'>
                        <span class="material-symbols-outlined name">
                            sell
                        </span>
                        <strong>Friend purchases any course</strong>
                        <h6>Using your REFERRAL CODE in the<br />
                            payments page</h6>
                    </div>
                    <div className='logo'>
                        <span class="material-symbols-outlined name">
                            percent
                        </span>
                        <strong>Your Friend gets ₹ 200 Off </strong>
                        <h6>
                            On his overall fee on successful<br />
                            purchase using your referral code
                        </h6>
                    </div>
                </div>
            </div>


            <div className='footer'>
                <h6>Friends Who Enrolled</h6>
            </div><br /><br />
            <div className='footer'>
                <h6>Terms & Conditions</h6>
            </div>
        </>
    )
}


