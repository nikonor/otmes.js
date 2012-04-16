/*
otmes - класс для вывода информации (ошибок, сообщений и дебага)
---
использвание:
	конструктор
		вставить в .ready строко типа 
			m = new otmes (''|1,{....}) 
				- первый параметр показывает как надо реагировать на вывод отладочной информации
					если пусто, то не показываем ничего
					если не пусто, то показываем
				- второй параметр - JSON словарь для указания куда выводить ту или иную информацию, использовать
				  этот парамерт имеет смысл, если div-ы нестандартные
					errorDiv - id  div-а для ошибок,
					messagesDiv - id  div-а для сообщений
					debugDiv - id  div-а для отладки
	вызовы
		m.e(строка[,notadd]) - вывод ошибки
		m.d(строка) - вывод отладки
		m.m(строка[,notadd]) - вывод сообщения
			если есть параметр notadd, то выводиться будет только новая инфомация, а старая стираться.

		m.clear(['e'|'m'|'d']) - очистка div-а
			если нет параметров, то очистяться все три дива

		m.beforesave () - очистка строго сообщений и ошибок. используется перед попыткой записи

*/
function otmes(spec_status, spec_data){

	this.name = 'otmes object';
	this.status = '';

	if (spec_status){
		this.status = spec_status;
	}

	this.data = {
		'errorDiv':'divError',
		'messagesDiv':'divMessage',
		'debugDiv': 'divDebug'
	};


	if (spec_data){
		for (var k in spec_data){
			this.data[k] = spec_data[k]
		}
	}

	if (this.status){
		$('#'+this.data.debugDiv).show();
	}

	this.__work = function (tdiv,str,notadd){
		if (notadd){
			$('#'+tdiv).html('');

		}
		$('#'+tdiv).html($('#'+tdiv).html()+'<br>'+str);
	}

	this.e = function(str,notadd){
		this.__work(this.data.errorDiv,str,notadd);
	}

	this.d = function(str,notadd){
		this.__work(this.data.debugDiv,str);
	}

	this.m = function(str,notadd){
		this.__work(this.data.messagesDiv,str,notadd);
	}

	this.clear = function (list){
		var slist = {'e':this.data.errorDiv,
					'd':this.data.debugDiv,
					'm':this.data.messagesDiv};

		if (typeof(list) == 'string'){
			list = [slist[list]]
		}else if (!list){
			list = [this.data.errorDiv, this.data.messagesDiv, this.data.debugDiv];
		}

		for (var d in list){
			$('#'+list[d]).html('');
		}
	}

	this.beforesave = function(){
		this.clear('e');
		this.clear('m');
	}

}
