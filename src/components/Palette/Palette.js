import React, { Component } from 'react';
import { Color } from '../Color/Color';
import { fetchApiData } from '../../utils/api';

export class Palette extends Component {
  constructor() {
    super();
    this.state = { 
      colors: [],
      savedProjects: [],
      savedPalettes: [],
    };
  }

  componentDidMount = async () => {
    this.regeneratePalette();
    document.addEventListener('keydown', this.handleKeydown);
    this.fetchProjects()
    this.fetchPalettes()
  }

  fetchProjects = async () => {
    let projects = await fetchApiData('projects')
    this.setState({
      savedProjects: projects[0]
    })
  }

  fetchPalettes = async () => {
    let palettes = await fetchApiData('palettes')
    this.setState({
      savedPalettes: palettes[0]
    })
  }

  handleKeydown = (event) => {
    if (event.keyCode === 32) this.regeneratePalette(this.state.colors);
  }

  regeneratePalette = (colors = []) => {
    let initialColors = [];

    for (let i = 0; i < 5; i++) {

      if (!colors[i] || !colors[i].locked) {
        initialColors.push({ hex: this.generateColor(), locked: false });

      } else if (colors[i].locked) {
        initialColors.push(colors[i]);
      }

    }
    this.setState({ colors: initialColors });
  }

  generateColor() {
    return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
  }

  toggleLocked = (hex) => {
    let storedPalette = this.state.colors;

    const foundColor = storedPalette.find(color => color.hex === hex)
    foundColor.locked = !foundColor.locked;

    this.setState({ colors: storedPalette });
  }

  render() {
    const { colors } = this.state;

    let paletteClass = this.props.active ? 'active' : '';

    return colors 
      ? <div className={`Palette ${paletteClass}`}>
        <div className="colors">
        {
          colors.map(color => <Color key={color.hex} toggleLocked={this.toggleLocked} {...color}/>) 
        }
        </div>
        <div className={`sidebar`}>sidebar{this.state.savedProjects.name}</div>
      </div>
      : <p>LOADING..</p>
  }
}