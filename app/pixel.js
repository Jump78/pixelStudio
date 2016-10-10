/**
 *@param {number} x [position X du pixel]
 *@param {number} y [position Y du pixel]
 */
class Pixel{
	constructor(x,y){
		this.couleur = $('body').css('background-color');
		this.x = x;
		this.y = y;
	}
}