# JavaScript Space Invaders
A modern recreation of the classic Space Invaders arcade game built with vanilla JavaScript, HTML and DOM manipulation. This project was developed as a performance-focused programming exercise, achieving consistent 60 FPS animation without using canvas or frameworks.

## Game Features

- Smooth 60+ FPS Gameplay: Optimized rendering using requestAnimationFrame
- Performance Monitoring: Built-in FPS counter and performance analytics
- Classic Space Invaders Mechanics:
  - Shoot down waves of descending aliens
  - Dodge enemy projectiles
  - Hide behind destroyable barriers
  - Face increasingly difficult levels
- Pause Menu System: Pause, continue, and restart functionality
- Dynamic Scoreboard: Real-time tracking of score, lives, and game time
- Responsive Controls: Smooth keyboard input handling

## Technical Implementation
This project focuses on optimizing web performance through:
- Proper implementation of requestAnimationFrame for animation
- Strategic DOM manipulation to minimize reflows and repaints
- Careful layer management for optimal rendering performance
- Event-based keyboard control system for responsive player input
- Custom collision detection algorithms

## How to Play
- Press **Enter** to start
- **Space**: Fire
- **P**: Pause Game
- **Left/Right Arrow Keys**: Move ship

## Development
This project was built with vanilla JavaScript to demonstrate performance optimization techniques in browser-based games. Key areas of focus include:

- Managing the browser rendering pipeline efficiently
- Implementing smooth animations without frame drops
- Creating responsive controls without input lag
- Balancing visual effects with performance considerations

## Perfomamce Monitoring
The game includes built-in performance monitoring. Press F12 to access your browser's developer tools and use the Performance panel to analyze:
- Frames per second (target: consistent 60 FPS)
- JavaScript execution time
- Layout and paint operations
- Jank detection

## Credits
Developed by [Shadrack Okoth](https://github.com/shaokoth) and [Valentine Omollo](https://github.com/vomolo) based on the original Space Invaders game designed by Tomohiro Nishikado and released by Taito in 1978.

## License
MIT [License](LICENSE)