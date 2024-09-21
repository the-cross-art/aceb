import React from 'react';
import './ev.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGalacticSenate, faSlackHash, faSteamSymbol, faSketch, faSearchengin, faBrave, faMandalorian } from '@fortawesome/free-brands-svg-icons';



const eventPage = () => {
    return (
        <main className="site-wrapper">
            <div className="pt-table desktop-768">
                <div className="pt-tablecell page-home relative" style={{
                    backgroundColor: 'rgba(14, 17, 24, 0.97)',
                    backgroundImage: "url(https://images.unsplash.com/photo-1682686581220-689c34afb6ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",

                    // backgroundImage: "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)", backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="overlay"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                <div className="page-title  home text-center">
                                    <span className="heading-page"> Welcome to 𝐀ｖᒪØⓀ𝐚𝐍 </span>
                                    <p className="mt20">ᴀᴠʟᴏᴋᴀɴ ɪꜱ ᴛʜᴇ ᴀɴɴᴜᴀʟ ᴛᴇᴄʜɴɪᴄᴀʟ ꜰᴇꜱᴛ ᴏꜰ ᴅᴇᴘᴀʀᴛᴍᴇɴᴛ ᴏꜰ ᴄɪᴠɪʟ ᴇɴɢɪɴᴇᴇʀɪɴɢ, ʙɪᴛ ꜱɪɴᴅʀɪ, ᴅʜᴀɴʙᴀᴅ, ʜᴇʟᴅ ᴜɴᴅᴇʀ ᴛʜᴇ ᴀᴇɢɪꜱ ᴏꜰ ᴀꜱꜱᴏᴄɪᴀᴛɪᴏɴ ᴏꜰ ᴄɪᴠɪʟ ᴇɴɢɪɴᴇᴇʀꜱ (ᴀᴄᴇ), ʙɪᴛ ꜱɪɴᴅʀɪ</p>
                                </div>

                                <div className="hexagon-menu clear">
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faGalacticSenate} />
                                                    <FontAwesomeIcon icon="fa-solid fa-dharmachakra" />
                                                </span>
                                                <span className="title">Chakravyuh</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faMandalorian} />
                                                </span>
                                                <span className="title">Vivakti</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    {/* <i className="fa fa-braille"></i> */}
                                                    <FontAwesomeIcon icon={faSlackHash} />
                                                </span>
                                                <span className="title">NIRMAAN</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faSteamSymbol} />
                                                </span>
                                                <span className="title">CAD-MAN</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faSketch} />
                                                </span>
                                                <span className="title"> GAME OF TRUSS</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faSearchengin} />
                                                </span>
                                                <span className="title">SCIENTIA</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                    <div className="hexagon-item">
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faBrave} />
                                                </span>
                                                <span className="title">GENESIS</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </a>
                                    </div>
                                </div>
                <button className="button-41" role="button">
                    <span className="text">Other Events</span>
                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default eventPage;