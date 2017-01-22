function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

// Load all .js files in ./src folder
requireAll(require.context("./src", true, /^\.\/.*\.js$/));

// Load all ressources in ./public folder except the compiled folder
requireAll(require.context("./public", true, /^\.\/(?!(compiled))(.*)$/));
