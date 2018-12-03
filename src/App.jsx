import React, { Component } from 'react';
import './App.sass';
// secciones
import Menu from './components/menu/menu';
import Cross from './components/cross/cross';
import Bullets from './components/bullets/bullets';
import Main from './components/main/main';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';

export default class App extends Component {

  state = {
    resolution: this.getResolution(),
    menuOpen: false,
    currentPage: 0,
  }

  getResolution() {
    const width = window.innerWidth;
    if (width >= 0 && width <= 480) {
      return 'phone';
    } else if (width >= 481 && width <= 768) {
      return 'tablet';
    }
    return 'desktop';
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const resolution = this.getResolution();
      if (this.state.resolution !== resolution) {
        this.setState(() => ({ ...this.state, resolution }));
      }
    });
  }

  onHandleMenu = currentPage => this.setState(() => ({
    ...this.state,
    menuOpen: !this.state.menuOpen,
    currentPage: currentPage || 0
  }));

  onHandleCurrentPage = currentPage => this.setState(() => ({
    ...this.state,
    currentPage
  }));

  render() {
    return (
      <div id="app" className={this.state.resolution} style={{ top: `${(-100 * this.state.currentPage)}%` }}>
        <Menu open={this.state.menuOpen} click={this.onHandleMenu} />
        <Cross click={this.onHandleMenu} menuOpen={this.state.menuOpen} />
        <Bullets click={this.onHandleCurrentPage} currentPage={this.state.currentPage} />
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}
