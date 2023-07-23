import React, { useEffect, useState } from 'react'
import Logo from '../Assets/LOGO-FINAL.png'
import message from '../Assets/Screenshot 2023-07-23 101759.png'
import notif from '../Assets/Screenshot 2023-07-23 101804.png'
import drop from '../Assets/Screenshot 2023-07-23 101810.png'
import groupicon from '../Assets/Screenshot 2023-07-23 102237.png'
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Profile from '../Assets/9fece8c293b6f0a500453f23fddd8f9b.jpg'
import Typography from '@mui/joy/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { TextField,Card, Button,Link } from '@mui/material';
import SmsIcon from '@mui/icons-material/Sms';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Navbar.css'


const myConnectionList = [
  {profile:'https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b',name:'Frank Devera',location:'Atimonan, Quezon'},
  {profile:'https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-For-Youtube-960x1024.jpg',name:'Dominic Fernandez',location:'Lopez, Quezon'},
  {profile:'https://th.bing.com/th/id/OIP.A_MGXTU1u63B6CMT6CRgPgHaKH?pid=ImgDet&rs=1',name:'Robert Lucas',location:'Mauban, Quezon'},
  {profile:'https://kaitlinzhang.com/wp-content/uploads/2017/03/how-to-take-a-profile-photo-personal-branding-kaitlin-zhang-15-1024x683.jpg',name:'Cristina Malubay',location:'Tayabas, Quezon'},
  {profile:'https://th.bing.com/th/id/OIP.mXtxedkYGWBGYR_nGd6adQHaE6?pid=ImgDet&rs=1',name:'Lukas Reyes',location:'Tayabas, Quezon'},
]
const myGroups = [
  {profile:'https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?pid=ImgDet&rs=1',business:`Farmer's Business Network, Inc.`},
  {profile:'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',business:`Farmer's Choice`},
  {profile:'https://dp.profilepics.in/profile-pictures-for-facebook-whatsapp/profile-pics/profile-pics-630.jpg',business:`Farmer Brother`},
  {profile:'https://burkeconsultingcorp.com/wp-content/uploads/2018/04/cropped-Profile-1024x1024.jpeg',business:`Agriproducts Networking Group`},
]
const requests = [
  {profile:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',name:'James Garcia',location:'Atimonan, Quezon'},
  {profile:'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Geovanni Leffler',location:'Sariaya, Quezon'},
  {profile:'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Trisha Moore',location:'Candelera, Quezon'},
  {profile:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Cristina Malubay',location:'Tayabas, Quezon'},

]
const Suggestions = [
  {profile:'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Abelardo Jacobi',location:'Atimonan, Quezon',background:'https://greenamerica.org/sites/default/files/pieces/istockag2.jpg'},
  {profile:'https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Jaylon Legros',location:'Sariaya, Quezon',background:'https://th.bing.com/th/id/OIP.sgPpIsjHAi6VeDiaz02KmAHaE7?pid=ImgDet&rs=1'},
  {profile:'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Pierre Streich',location:'Candelera, Quezon',background:'https://th.bing.com/th/id/OIP.HtSFeKLKbn6p8PJV0xDiWAHaEF?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
  {profile:'https://images.pexels.com/photos/2918513/pexels-photo-2918513.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Cristina Malubay',location:'Tayabas, Quezon',background:'https://th.bing.com/th/id/OIP.cOkoDvCWEIipMjSy7Sgo7QHaEc?pid=ImgDet&rs=1'},
]
const join = [
  {profile:'https://i.pinimg.com/originals/9b/dc/92/9bdc929a29a72dce48be820a3552e84f.jpg',name:'Community Farmers',background:'https://images.all-free-download.com/images/graphiclarge/evidence_of_travel_513304.jpg'},
  {profile:'https://s3-media0.fl.yelpcdn.com/bphoto/DHnFNZO4UWbIvr5pYazUPA/l.jpg',name:'Tayabas Fruits and Vegetables Dealer',background:'https://live.staticflickr.com/5480/30578680495_54b06f54f1_b.jpg'},
  {profile:'https://i.pinimg.com/originals/d3/8b/6f/d38b6f63357e45fc0b15cf5886f80b94.jpg',name:'Bentahan ng gulay,prutas at iba pa',background:'https://media.istockphoto.com/photos/agriculture-picture-id606230424?k=6&m=606230424&s=170667a&w=0&h=lrZ_pR7QFuPJ-ErS0sTKXDbIygG7eSWytR361D4wev0='},
  {profile:'https://i.pinimg.com/originals/d3/ac/ca/d3accacfeee6aac91906765b1f4df13d.jpg',name:'Amplaya',background:'https://th.bing.com/th/id/OIP.kiTSqGB1nGLyb9kkpqKu6wHaE8?pid=ImgDet&rs=1'},
]

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Navbar = () => {
    const drawerWidth = 240;
    const [activeTab,setActiveTab] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const theme = useTheme();
    const [open, setOpen] = useState(false);
  
    
    const handleTabClick = (index) => {
    setActiveTab(index);
    };
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const getResponsiveCardStyle = () => {
      if (screenWidth <= 768) {
        return {
          borderRadius: '15px',
          width: '98%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      } else if (screenWidth <= 576) {
        return {
          borderRadius: '10px',
          width: '80%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      } else {
        return {
          borderRadius: '25px',
          width: '90%',
          display: 'flex',
          border: 'none',
          padding: '0px'
        };
      }
    };
  
    const cardStyle = getResponsiveCardStyle();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
        <div style={{display:'flex',alignItems:'flex-start',width:'100%'}}>
          <img style={{width:'60px'}} alt="Travis Howard" src={Logo} />
        </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Products', 'My Network','Messages','Notifications'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
               sx={{
                '&:hover': {
                  backgroundColor: '#f1f1f1', 
                  cursor: 'pointer',
                },
               }}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Edit Profile', 'Change Password', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className='header'>
        <Card className='navsection' style={cardStyle} elevation={3}>
          <div className='menu' onClick={handleDrawerOpen}><MenuIcon/></div>
              <div className='logosearchbar'>
              <img alt="Cindy Baker" src={Logo} 
              />
              <TextField 
              size='small' 
              type="text" 
              className='searchicon'
              fullWidth
              sx={{
                  borderRadius:'30px',
                  backgroundColor:'#f1f3fa',
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent', 
                        borderRadius: '30px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                      },
                    },
              }}
              InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              
              placeholder="Search " 
              />
              </div>
              <div className='tabs'>
              <ul>
          <li
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => handleTabClick(0)}
          >
            Products
          </li>
          <li
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => handleTabClick(1)}
          >
            Home
          </li>
          <li
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => handleTabClick(2)}
          >
            My Network
          </li>
        </ul>
              </div>
              <div className='components'>
                <div className='username'>
                  <Chip
                      variant="plain"
                      color="neutral"
                      size="lg"
                      sx={{marginLeft:'20px'}}
                      startDecorator={<Avatar size="lg" src={Profile} />}
                  >
                      Juan Dela Cr...
                  </Chip>
                </div>
                <div className='icons'>
                <Avatar sx={{width:'30px',cursor:'pointer'}} alt="Travis Howard" src={message} />
                <Avatar sx={{width:'25px',cursor:'pointer'}} alt="Travis Howard" src={notif} />
                <Avatar sx={{width:'30px',cursor:'pointer',height:'50px',marginTop:'7px'}} alt="Travis Howard" src={drop} />
                </div>
              </div>
        </Card>
        <div className='content'>
            <div className='content1'>
            <Card sx={{width:'100%',height:'max-Content',borderRadius:'20px',padding:'15px 0px 10px 20px'}}>
                <div className='contentheader'>
                  <Typography sx={{fontSize:'15px'}}>Manage my network</Typography>
                </div>
                <div>
                <div className='myconnectionstitle'>
                  <div className='myconnectionstitle'>
                  <img style={{width:'30px',height:'35px',marginTop:'-10px'}} alt="" src={groupicon} />
                  <p className='title'> My connections</p>
                  </div>
                  <div>
                    <p style={{fontSize:'12px'}}>28</p>
                  </div>
                </div>
                </div>
                <div className='containerlist'>
                  {myConnectionList.map((data) =>{

                    return (
                      <>
                      <div className='list'>
                        <div className='profilename'>
                        <div>
                        <Avatar sx={{width:'30'}} alt="Travis Howard" src={data.profile} />
                        </div>
                        <div className='details'>
                          <h2>{data.name}</h2>
                          <p className='title'>{data.location}</p>
                        </div>
                        </div>
                        <div className='messageactions'>
                          <Button className='messageactionsBtn'>
                            <SmsIcon sx={{fontSize:'15px'}}/><p>Message</p>
                          </Button>
                        </div>
                      </div>
                      </>
                    )
                  })}
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                  <Link sx={{color:'black',fontSize:'10px'}}>View all</Link>
                </div>
                <div className='myconnectionstitle'>
                <div className='myconnectionstitle'>
                <img style={{width:'30px',height:'35px',marginTop:'-10px'}} alt="Travis Howard" src={groupicon} /> 
                  <Typography> Groups</Typography>
                  </div>
                  <div>
                    <p style={{fontSize:'12px'}}>7</p>
                  </div>
                </div>
                <div className='mygroups'>
                  {myGroups.map((data) =>{

                    return(
                      <>
                      <div className='grouplist'>
                      <Avatar sx={{width:'30'}} alt="Travis Howard" src={data.profile} />
                      <p style={{marginLeft:'10px',padding:0}}>{data.business}</p>
                      </div>
                      </>
                    )
                  })}
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                  <Link sx={{color:'black',fontSize:'10px'}}>View all</Link>
                </div>
            </Card>
            </div>
            <div className='content2'>
            <Card sx={{width:'100%',height:'max-Content',borderRadius:'20px',overflow:'visible'}}>
              <div style={{textAlign:'center'}}>
                <h1 style={{fontSize:'17px',margin:'25px 0px 15px 0px',color:'gray'}}>CONNECTIONS</h1>
              </div>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>Requests</p>
                  <Link sx={{color:'black',fontSize:'12px'}}>View all</Link>
                </div>
                <div className='requestlist'>
                  {requests.map((data) =>{
                    return(
                      <>
                      <div className='cardprofile'>
                      <Card elevation={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'10px',height:'155px',width:'150px',border:'none'}}>
                        <div style={{border:'2px solid green',padding:'5px',borderRadius:'50%'}}>
                        <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
                        </div>
                      <div style={{margin:'5px'}}>
                      <h2 style={{fontSize:'12px'}}>{data.name}</h2>
                      <p style={{fontSize:'12px'}}>{data.location}</p>
                      </div>
                      <div style={{display:'flex'}}>
                        <button className='acceptbtn'>
                          Accept</button>
                          <button className='xbtn'>
                            X
                          </button>
                      </div>
                      </Card>
                      </div>
                      </>
                    )
                  })}
                </div>
              </Card>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>Suggestions</p>
                  <Link sx={{color:'black',fontSize:'12px'}}>View all</Link>
                </div>
                <div className='requestlist'>
                  {Suggestions.map((data) =>{
                    return(
                      <>
                      <div className='cardprofile'>
                      <Card elevation={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'170px',width:'170px',border:'none'}}>
                      <div className='backgroundimg' style={{backgroundImage:`url(${data.background})`}}>
                        <div className='circular' style={{padding:'5px',borderRadius:'50%',position:'relative'}}>
                        <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
                        </div>
                      </div>
                        <div style={{margin:'5px'}}>
                        <h2 style={{fontSize:'12px'}}>{data.name}</h2>
                        <p style={{fontSize:'12px'}}>{data.location}</p>
                        </div>
                        <div style={{display:'flex'}}>
                          <button className='acceptbtn'>
                            Connect</button>
                        </div>
                      </Card>
                      </div>
                      </>
                    )
                  })}
                </div>
              </Card>
              <Card className='contentCard' sx={{borderRadius:'12px',border:'0.5px solid #f1f3fa'}}>
                <div className='contentCard1'>
                  <p style={{fontWeight:500}}>You may want to join...</p>
                  <Link sx={{color:'black',fontSize:'12px'}}>View all</Link>
                </div>
                <div className='requestlist'>
                  {join.map((data) =>{
                    return(
                      <>
                      <div className='cardprofile'>
                      <Card elevation={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'0px 0px 10px 0px',height:'max-Content',width:'170px',minHeight:'150px',border:'none'}}>
                      <div className='backgroundimg' style={{backgroundImage:`url(${data.background})`}}>
                        <div className='circular' style={{padding:'5px',borderRadius:'50%',position:'relative'}}>
                        <Avatar alt="Remy Sharp" src={data.profile} size="lg" />
                        </div>
                      </div>
                        <div style={{margin:'5px',textAlign:'center',height:'30px'}}>
                        <h2 style={{fontSize:'12px',fontWeight:'300'}}>{data.name}</h2>
                        </div>
                        <div style={{display:'flex'}}>
                          <button className='acceptbtn'>
                            Join</button>
                        </div>
                      </Card>
                      </div>
                      </>
                    )
                  })}
                </div>
              </Card>
            </Card>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar