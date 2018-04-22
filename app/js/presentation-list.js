"usea strict";
class PresentationListModel {
    get apiUrl() {
        return 'json/apresentacoes.html'
        //return 'https://feedback-apresentacao.herokuapp.com/api/apresentacoes';
    }

    getList(resolve, reject) {
        var apiUrl = this.apiUrl;

        return new Promise((resolve, reject) => {
            fetch(apiUrl)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(json) {
                        resolve(json);
                    });
                }
                else {
                    reject('Erro ao tentar pegar a lista de apresentações')
                }
              })
              
        });
    }
}

