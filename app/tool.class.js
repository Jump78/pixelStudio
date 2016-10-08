class Tool{
	/**
	 * Représente une couleur dans la palette
	 * @param  {[string]} name  Nom de l'outils
	 * @param  {[string]} icone URI vers l'icone
	 * @param {function} fonction Utilite de l'outils
	 */
	constructor(name, icone, fonction){
		this.name = name;
		this.icone = icone;
		this.use = fonction || this.default;
	}

	default(){
		console.log('Non paramétré');
	}
}