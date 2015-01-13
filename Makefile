build: scrollfps.min.js components index.js
	@component build --dev

components: component.json
	@component install --dev

scrollfps.js: components
	@component build --standalone scrollfps --name scrollfps --out .

scrollfps.min.js: scrollfps.js
	@uglifyjs $(UGLIFY_FLAGS) $< > $@ \
	  && du -h scrollfps.js \
	  && du -h scrollfps.min.js

clean:
	rm -rf build scrollfps.js components scrollfps.min.js

.PHONY: clean