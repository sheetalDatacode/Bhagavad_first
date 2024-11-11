import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import banner2 from './images/banner2.png';
import "./Bhagavad.css";
import Dropdown from 'react-bootstrap/Dropdown';
function Bhagawat()
{
    return(
        <div>
             <div>
                
                <Navbar expand="lg" className="bg-body-tertiary" >
                <Container>
                     <Navbar.Brand href="#">Bhagavad Gita</Navbar.Brand>
                </Container>
                <Dropdown className='Drop'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Some More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Chapters</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Quotes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">About Gita</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Gita AI</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Donate </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </Navbar>
             </div> 
            <div>
            <Card className="bg-dark text-white">
                <Card.Img src={banner2} alt="Card image"  height={500} width={500}/>
                    <Card.ImgOverlay>   
                    <br></br><br></br><br></br><br></br><Card.Text>
                                <center>
                                    <h2 className='ex'>Experience the Gita</h2>
                                    <h2 className='anywhere'>Anywhere, Anytime</h2><br></br>
                                    <button className='button' >Read Now</button>
                                </center>
                            </Card.Text>
                        
                    </Card.ImgOverlay>
            </Card>
            </div>
            <br></br><br></br>
                <div className='carddiv'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='head'>Verse of the day -BG 8.2</Card.Text>
                                <Card.Text>
                                    Who and how is Adhiyajna here is this body, O destroyer of Madhu? and how,at the 
                                    time of death, are you to be known by the self-controlled?
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>
                </div><br></br><br></br>
                    <div className='inputdiv'>
                                <center>
                                    <h2 className='input'>Have the <br></br>Shloka of the
                                    <br></br> Day <br></br> deliverd to 
                                    <br></br>your inbox <br></br>each
                                    <br></br>morning</h2>
                                    <br></br><br></br>
                                        <input placeholder='Enter Your Name' className='Enter'></input><br></br><br></br>
                                        <input placeholder='Enter Your Email' className='Enter'></input><br></br><br></br>
                                        <button className='button2'>Subscribe</button>
                                </center>
                    </div>
                    <h1 className='chapters'>Chapters</h1>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 1</Card.Text>
                            <Card.Text className='subtitle'>Arjuna Visada Yoga</Card.Text>
                                <Card.Text>
                                The first chapter of the Bhagavad Gita - "Arjuna Visada Yoga".
                                    Introduces the setup,the setting,the characters and circumstances that led to the Experience
                                    battle of Mahabharata,Fought between the pandavas and the kauravas. It outlines the reasions that led to the revelation o....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 2</Card.Text>
                            <Card.Text className='subtitle'>Sankhya Yoga</Card.Text>
                                <Card.Text>
                                The Second chapter of the Bhagavad Gita - "Sankhya Yoga".this is the most 
                                important chapter of the Bhagavad Gita as 
                                Lord Krishna condenses the teachings of the entire Gita in this chapter.This chapter is the
                                 essence of the entire Gita."Sankhya Yoga" can be categorized int....
                                    
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>

                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>Chapter 3</Card.Text>
                            <Card.Text className='subtitle'>Karma Yoga</Card.Text>
                                <Card.Text>
                                The Third chapter of the Bhagavad Gita - "Karma Yoga".The Third chapter of the Bhagavad Gita is "Karma Yoga" or the "Path of Selfless Service". Here Lord Krishna emphasizes the importance of 
                                Karma in the life.He reveals that it is important for every human being to engage in some sort of actiity
                                in this material world. Futher,he.....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 4

                            </Card.Text>
                            <Card.Text className='subtitle'>Jnana Karma Sankhya Yoga</Card.Text>
                                <Card.Text>
                                The Forth chapter of the Bhagavad Gita - "Jnana Karma Sankhya".In this chapter,Krishna glorifies the Karma Yoga and imparts
                                the Transcendental Knowledge (The Knowledge of soul and the ultimate Truth) to Arjuna.he reveals the reason behind his apprearance in this m....

                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 5

                            </Card.Text>
                            <Card.Text className='subtitle'>Karma Sanyasa Yoga</Card.Text>
                                <Card.Text>
                                    The fift chapter of the Bhagavad Gita is "Karma Sanyasa Yoga".In this chapter,krishna compares the paths of renunciation in actions(Karma Sanyas) 
                                    and actions with detachement (Karma Yoga) and explains that both are means to reach the same goal and we can choose aither.A wi..........
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 6

                            </Card.Text>
                            <Card.Text className='subtitle'>Dhyana Yoga</Card.Text>
                                <Card.Text>
                                    The sixth chapter of the Bhagavad Gita is "Dhyana Yoga". In this chapter, Krishna
                                    reveals the "Yoga of meditation" and how to practise this Yoga.he discusses the role of actionin preparing for meditation
                                    ,how perfoming duties in devotion purifies one's mind and heightens on......
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 7

                            </Card.Text>
                            <Card.Text className='subtitle'>Gyaan Vigyana Yoga</Card.Text>
                                <Card.Text>
                                    The seventh chapter of the Bhagavad Gita is "Gyaan Vidgyana Yoga".In this chapter,Krishna reveals that
                                    he is the eme Truth,the principal couse and the sutaining force of everything.He reveals this illusionary energy in this material world called maya.
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 8

                            </Card.Text>
                            <Card.Text className='subtitle'>Akshara Bhrama Yoga</Card.Text>
                                <Card.Text>
                                 The  eighth chapter of the Bhagavad Gita is "Akshara Brahma Yoga". In this chapter reveals the importance of the last thought before death. If we can remember Krishna at the time of death, we will certainly attain him. thus, it is very important to be in constant awareness of the Lord at all times, thinking of Him and chanting His names at all time. By perfectly absorbing their mind in Him through constant devotion, one can go beyond this materrial existence to Lord's Superme abode. 
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 9

                            </Card.Text>
                            <Card.Text className='subtitle'>Raja Vidhya Yoga</Card.Text>
                                <Card.Text>
                                    The ninth chapter of the Bhagavad Gita is "Raja Vidhya Yoga". In this chapter, Krishna explain that He is Superme and how this material existence is created, maintained and destroyed by His Yogmaya and all beings come and go under his supervision. He reveals the Role and the importance of Bhakti (transcendental devotional service) towards our Spriritual Awakening. In such devotion, one must live for the God, offer everything that he possesses to Him and do everyting for Him only. One who follows such devotion becomes free from the bonds of this material world and unites with the Lord. 
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 10

                            </Card.Text>
                            <Card.Text className='subtitle'>Vibhooti Yoga </Card.Text>
                                <Card.Text>
                                    The tenth chapter of the Bhagavad Gita is "Vibhooti Yoga". In this chapter, Krishna reveals Himself as the cause of all causes. He describes His various manifestations and opulences in order to increase Arjuna's Bhakti. Arjuna is fully convinced 
                                    of Lord's paramount position an.........
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 11

                            </Card.Text>
                            <Card.Text className='subtitle'>Vishwaroopa Darshana Yoga</Card.Text>
                                <Card.Text>
                                 The eleventh chapter of the Bhagavad Gita is "Vishwaroopa Darshana Yoga".In this chapter
                                 Arjuna requests Krishna to reveal His Univers Cosmic Form that Encompases allthe universes,The entire existence.Arjuna is granted
                                 edivine Vision to be to see the entirety of Creation in the body of the Supreme Lord Krishna.
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 12

                            </Card.Text>
                            <Card.Text className='subtitle'>Bhakti Yoga</Card.Text>
                                <Card.Text>
                                    The Twelfth chapter of the Bhagavad Gita is "Bhakti Yoga". In this chapter,Krishna emphasizes
                                    the superioty of Bhakti Yoga(the path of devotion) over all other types of spritual disciplines and reveals
                                    various aspescts of devotion. He Futher explain that the devotees
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 13

                            </Card.Text>
                            <Card.Text className='subtitle'>Kastra Ksetrajna Vibhaaga Yoga</Card.Text>
                                <Card.Text>
                                The Thirteenth chapter of the Bhagavad Gita is "Ksetra Ksetrajna Vibhaaga Yoga".The word "Ksetra"
                                means "the field",and the "Ksetrajna" means "the knower of the field".we can think of our material body soul as the knower of the field .in this.....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 14

                            </Card.Text>
                            <Card.Text className='subtitle'>Gunatraya Vibhaaga Yoga</Card.Text>
                                <Card.Text>
                                The Fourteenth chapter of the Bhagavad Gita is "Gunatraya Vibhaaga Yoga". In this chapter,krishna reveal
                                 the three gunas (modes) of the material nature-goodness, passion and ignorance which everything in the futher eexplains the seen....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 15

                            </Card.Text>
                            <Card.Text className='subtitle'>purushottama Yoga</Card.Text>
                                <Card.Text>
                                The fifteenth chapter of the Bhagavad Gita is "purushottama Yoga". In Sanskrit,prusha means "All prevading God" and purushottama
                                means the  timeless & transcendental aspect of God. Krishna reveals that the purpose of this  Transcendental Knowledge of the god is to detech ourselves
                                from the boindage pf the material of the material world and to undesrstand Krishna as the Supreme devine
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 16

                            </Card.Text>
                            <Card.Text className='subtitle'>Daivasura Sampad Vibhaaga Yoga</Card.Text>
                                <Card.Text>
                                The Sixteenth chapter of the Bhagavad Gita is "Daivasura Sampad Vibhaaga Yoga". In this chapter,krishna describes explicity
                                the two kinds of natures among human beings - devine and demoniac.Those Who possess demoniac qualities associate themeselves with the modes of 
                                passion a....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 17

                            </Card.Text>
                            <Card.Text className='subtitle'>Sradhatraya Vibhaaga Yoga</Card.Text>
                                <Card.Text>
                                The seventeenth chapter of the Bhagavad Gita is "Sradhatraya Vibhaaga Yoga".IN this chapter ,krishna describes the three tupes of tdaith
                                corresponding to the three modes of the material nature. Lord Krishna futher reveals that it is the nature of faith that determiness the qua....
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
                    <div className='chapter'>
                    <Card style={{ width: '500' }}>
                        <Card.Body>
                            <Card.Text className='title'>chapter 18

                            </Card.Text>
                            <Card.Text className='subtitle'>Moskha Sanyaas Yoga</Card.Text>
                                <Card.Text>
                                The eighteenth  chapter of the Bhagavad Gita is "Moskha Sanyas Yoga".Arjuna requests the Lord to explain the difference between
                                 the two types of renunciation.
                                 </Card.Text>
                            <Card.Link href="#" className='see'>SEE MORE</Card.Link>
                        </Card.Body>
                    </Card>

                    </div><br></br>
        </div>
        
    );
}
export default Bhagawat;