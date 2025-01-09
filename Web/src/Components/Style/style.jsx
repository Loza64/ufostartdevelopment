import styled from "styled-components";

export const NavbarContainer = styled.div`
  top : 0;
  position: fixed;
  width: 100%;
  color: white;
  backdrop-filter: blur(15px);
  z-index:10;
  padding: ${({ statenavbar }) => (statenavbar ? "15px" : "10px")} 13px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  .d-menu{
    display:none;
  }
  justify-content: space-between;
  @media only screen and (max-width:475px){
    .d-menu{
      display: block
    }
  }
`;

export const NavbarMenu = styled.nav`
display: flex;
justify-content:space-between;
flex-direction: row;

.enlace {
  padding: 5px 17px;
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: 800;
  transition: all 0.3s ease-in-out;
  border:solid 3px transparent;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}
.enlace .iconfont {
  font-size: 18px;
}
.enlace:hover {
  color: red;
}
.enlace.active {
  border-bottom: solid 3px red;
}

#btn-close {
  display:none;
  background-color: rgba(255, 0, 0, 0.308);
  padding: 6px 9px;
  font-size: 40px;
  border-radius: 100%;
  transition: all 0.001s ease-in-out;
}

#btn-close:active {
  background-color: red;
}
@media only screen and (max-width:922px){
  .enlace label{
    display: none
  }
}
@media only screen and (max-width:575px){
  .enlace{
    font-size: 14px;
  }
  .enlace .iconfont {
    font-size: 15px;
  }
}

@media only screen and (max-width:475px){
  &{
  position: fixed;
  top: 0%;
  left: ${({ open }) => (open ? "0" : "100%")};
  margin: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.80);
  display: block;
  transition: all 0.4s ease-in-out;
  animation-name: ${({ open }) => (open ? "open_nav" : "close_nav")};
  animation-iteration-count: 1;
  animation-duration: .5s;

  @keyframes open_nav{
  0%{
  left:100%;
  }
  50%{
  left:-30%;
  }
  100%{
  left:0;
  }
  }

  @keyframes close_nav{
  0%{
  left:0%;
  }
  50%{
  left:50%;
  }
  100%{
  left:100;
  }
  }
  
  display:flex;
  flex-direction: column;
  justify-content:center;
  gap:40px;

  .d-menu{
    display: block
  }

  .menu {
    text-align: center;
  }

  .enlace {
    border-radius: 0px;
    transition: all 0.1s ease-in-out;
    border-bottom: solid 3px red;
    font-size:18px;
    text-align:center;
    margin:0 30px;
  }
  .enlace .iconfont {
    font-size: 20px;
  }
  .enlace:hover {
    background: none;
    color: rgb(255, 255, 255);
  }

  .enlace label{
    display: inline-block
  }

  #btn-close{
    display: inline-block;
  }

  z-index:1005
  }
}
`;

export const PositionButtom = styled.div`
  position: fixed;
  right: 1.4%;
  z-index:2;
  bottom: 2.4%;
  transition:all 0.3s ease-in-out;
  transform:scale(${({ top }) => (top ? "100%" : "0%")});
  .buttom-top{
    background-color: red;
    border-radius: 100%;
    transition:all 0.4s ease-in-out;
  }
  .icon-buttom-top{
    font-size: 50px;
    color: white;
    font-weight: bold;
  }
`;

export const DetailsProject = styled.div`   
    position:fixed;
    display: flex;  
    justify-content: center;  
    align-items: center;   
    left:0%;
    top:0%;
    width: 100%;  
    height: 100vh;
    transition: all .7s ease-in-out;
    background: ${({ open }) => (open ? "rgba(0,0,0,.5)" : "none")};  
    backdrop-filter: ${({ open }) => (open ? "blur(10px)" : "none")};
    z-index: ${({ open }) => (open ? "10000" : "-20")};  

    .btn-close-details{
       position:absolute;
       top:3%;
       right:1.5%;
       color:white;
       font-size:35px;
       transition: transform .7s ease-in-out;
       cursor: pointer;
       transform: translateX(${({ open }) => (open ? "0" : "100rem")});
    }

       .details { 
       transition: all .7s ease-in-out;
       opacity: ${({ open }) => open ? "1" : "0"};
       transform: translateY(${({ open }) => (open ? "0" : "-5rem")});
       text-align:center;

            label{
              font-size:35px;
              color:white;
              font-weight:600;
            } 

            @media only screen and (max-width:480px){
               label{
                font-size:25px;
               }
            }

           .item{
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
          
            img{
              margin: 0 auto;
              max-width: 80%;
              max-height: 90vh;
              padding:5px;
              border-radius: 10px;
              background: linear-gradient(340deg, red, yellow);
              box-shadow: 3px 3px 3px red, -3px -3px 5px yellow;
              cursor: pointer;
            }

            .btn-item{
            cursor: pointer;
            color:white;
            font-size:60px;
            background:none;
            border:none;
            transition: all .3s ease-in-out;
            &:active{
            transform:scale(90%);
            }
            }

            @media only screen and (max-width:590px){
            .btn-item{
            font-size:35px;
            }
            }
           }
        }  
    }  
`;