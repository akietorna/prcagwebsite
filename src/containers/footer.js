import React from 'react'
import Footer from '../components/footer'
import * as TiIcons from 'react-icons/ti'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Paragraph>
                            PRC AG is a christian organization  
                            geared  towards impacting lifes in  
                            this generation  and the latter generation. 
                            Our aim is to win  more souls for Christ   
                            and also groom and teach  the won souls  
                            the means  to Heaven.
                        </Footer.Paragraph>
                        <Footer.Link href='/others/about-us'>Read Our History</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                        <Footer.Link href='#'><IoIcons.IoIosCall />  (00233) 24 000 0000 </Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social Media</Footer.Title>
                        <Footer.Link href='http://facebook.com'><TiIcons.TiSocialFacebook /> Facebook</Footer.Link>
                        <Footer.Link href='http://twitter.com'><TiIcons.TiSocialTwitter /> Twitter</Footer.Link>
                        <Footer.Link href='http://instagram.com'><Footer.Span><TiIcons.TiSocialInstagram /></Footer.Span> Intagram</Footer.Link>
                        <Footer.Link href='http://telegram.com'><Footer.Span><FaIcons.FaTelegramPlane /></Footer.Span> Telegram</Footer.Link>
                        <Footer.Link href='http://youtube.com'><Footer.Span><TiIcons.TiSocialYoutube /></Footer.Span> Youtube</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Legal Notice</Footer.Title>
                        <Footer.Link href='#'><Footer.Span><FaIcons.FaHandshake /></Footer.Span> Terms and Conditions</Footer.Link>
                        <Footer.Link href='#'><MdIcons.MdOutlinePrivacyTip /> Privacy Notice</Footer.Link>
                        <Footer.Link href='#'>&copy;  2022 PRC Publicity Team</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}