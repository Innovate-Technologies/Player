export default class ConfigService {
  /*@ngInject*/
  constructor($http, $q) {
    this.getConfig = (username) => {
      if (!username) {
        return $q.reject();
      }
      return $http
        .get("https://itframe.innovatete.ch/player/" + username)
        .then(response => response.data);
    };
    this.getTunein = (username) => {
      if (!username) {
        return $q.reject();
      }
      return $http
        .get("https://itframe.innovatete.ch/tunein/" + username)
        .then(response => response.data);
    };
  }
}
