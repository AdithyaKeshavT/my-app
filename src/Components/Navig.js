import React from 'react'
import { Navbar, NavLink, NavbarText, Collapse, Nav, NavItem } from 'reactstrap'
import { General } from './General'
import Home from './Home'
import Main from './Main'
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'
import Tables from './Tables'

const Navig = (a) => {
  let [n, setn] = React.useState(true)
  let [b, setb] = React.useState(true)
  let [c, setc] = React.useState(false)
  let [d, setd] = React.useState(false)
  let [e, sete] = React.useState(false)
  let [f, setf] = React.useState(false)
  let [g, setg] = React.useState(false)
  let [h, seth] = React.useState(false)

  return (
    <>
        {n &&
          <Navbar color="dark" dark expand light >
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink onClick={() => { setb(true); setc(false); setd(false); sete(false); setf(false); setg(false); seth(false) }} active={b} >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { setc(true); setb(false); setd(false); sete(false); setf(false); setg(false); seth(false) }} active={c} >
                    Table
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { setd(true); setb(false); setc(false); sete(false); setf(false); setg(false); seth(false) }} active={d} >
                    Table 1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { setf(true); setd(false); setb(false); setc(false); sete(false); setg(false); seth(false) }} active={f} >
                    useEffect
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { setg(true); setf(false); setd(false); setb(false); setc(false); sete(false); seth(false) }} active={g} >
                    Table2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { seth(true); setg(false); setf(false); setd(false); setb(false); setc(false); sete(false) }} active={h} >
                    DataTable
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={() => { sete(true); setb(false); setc(false); setd(false); setf(false); setg(false); seth(false); setn(false) }} active={e} >
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
              <NavbarText>
                Welcome {a.Name}
              </NavbarText>
            </Collapse>
          </Navbar>
        }
        {
          b && <Home />
        }
        {
          c && <Tables />
        }
        {
          d && <Table1 />
        }
        {
          e && <Main />
        }
        {
          f && <General />
        }
        {
          g && <Table2 />
        }
        {
          h && <Table3 />
        }
    </>

  )
}
export default Navig