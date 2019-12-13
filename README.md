# 3-CC-Gravatational-Enviorment
This is a Coding Challenge where I try to implement the different laws of gravity, Drag, Friction, Air Resistance and try to make a physics simulation of it

## How it works
### Impact
When a ball impacts a surface, the surface recoils and vibrates, as does the ball, creating both sound and heat, and the ball loses kinetic energy. Additionally, the impact can impart some rotation to the ball, transferring some of its translational kinetic energy into rotational kinetic energy. This energy loss is usually characterized (indirectly) through the coefficient of restitution (or COR, denoted e) :

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/72a8f9b9ad0a669114abdf9cbec4a6d21c8960c6)

where vf and vi are the final and initial velocities of the ball, and uf and ui are the final and initial velocities impacting surface, respectively. In the specific case where a ball impacts on an immovable surface, the COR simplifies to :

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bf8f520aec11bdc4e290c58e8cab24f0add1a4d7)

### Drag
Lift-induced drag is only relevant when wings or a lifting body are present, and is therefore usually discussed either in aviation or in the design of semi-planing or planing hulls. Wave drag occurs either when a solid object is moving through a gas at or near the speed of sound or when a solid object is moving along a fluid boundary, as in surface waves.

Drag depends on the properties of the fluid and on the size, shape, and speed of the object. One way to express this is by means of the drag equation:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/5b3bf12f95f6d0174755a9248ba34e638cf90310)

Where:
- Fd is the drag force,
- rho  is the density of the fluid,[11]
- v is the speed of the object relative to the fluid,
- A is the cross sectional area, and
- Cd is the drag coefficient – a dimensionless number.

The drag coefficient depends on the shape of the object and on the Reynolds number

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bde3e7301078342ddc558dd5e46e101b6811a684)

It can be demonstrated that drag force can be expressed as a function of a dimensionless number, which is dimensionally identical to the Bejan number. Consequently, drag force and drag coefficient can be a function of Bejan number. In fact, from the expression of drag force it has been obtained:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1c60fc85bd7d308bf59caa2cf1d515d0cc3961a1)

## Sources
- [Bouncing Ball Wikipedia](https://en.wikipedia.org/wiki/Bouncing_ball)
- [Drag Force Wikipedia](https://en.wikipedia.org/wiki/Drag_(physics))
