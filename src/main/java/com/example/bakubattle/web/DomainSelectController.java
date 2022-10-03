package com.example.bakubattle.web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Slf4j
@Controller
@RequestMapping("/domain")
@SessionAttributes("player")
public class DomainSelectController {

    @GetMapping
    public String loadDomainSelector(Model model){
        return "domain_select";
    }
}
