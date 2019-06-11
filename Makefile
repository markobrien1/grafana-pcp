#
# build grafana-pcp-redis
#
YARN=/usr/bin/nodejs-yarn
SPEC=packaging/rpm/grafana-pcp-redis.spec

default: node_modules dist/module.js.map

clean:
	rm -f packaging/rpm/*.{rpm,tgz}

node_modules: package.json
	$(YARN) install

dist/module.js.map: src/module.ts src/plugin.json src/query_ctrl.ts src/datasource.ts
	$(YARN) run build
	@echo 'Note: all changes in "dist" directory must be committed. git status :'
	@git status

rpm: $(SPEC)
	packaging/rpm/make_rpms.sh
