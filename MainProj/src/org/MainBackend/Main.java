package org.MainBackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class Main {
    @Controller
    public class HomeController {
        @GetMapping("/")
        public String index(Model m) {
            m.addAttribute("message", "Hello from Java");
            return "index"; // resolves to src/main/resources/templates/index.html or .ftl
        }
    }
}
