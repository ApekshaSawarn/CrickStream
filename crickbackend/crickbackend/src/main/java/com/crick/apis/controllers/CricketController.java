package com.crick.apis.controllers;

import com.crick.apis.entities.Match;
import com.crick.apis.services.CricketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/cricket")
@CrossOrigin("*")
public class CricketController {

    private CricketService cricketService;

    public CricketController(CricketService cricketService) {
        this.cricketService = cricketService;
    }

    // api for getting live matches

    @GetMapping("/live")
    public ResponseEntity<?> getLiveMatchScores() throws InterruptedException {
        System.out.println("getting live match");
        return new ResponseEntity<>(this.cricketService.getLiveMatchScores(), HttpStatus.OK);
    }

    @GetMapping("/CWC2023")
    public ResponseEntity<?> getCWC2023PointTable() {
        return new ResponseEntity<>(this.cricketService.getCWC2023PointTable(), HttpStatus.OK);
    }
    
    @GetMapping("/points-table/{matchName}")
    public ResponseEntity<?> getPointTable(@PathVariable String matchName) {
    	HashMap<String, String> hashMap=new HashMap<String, String>();
    	System.out.println(matchName);
    	hashMap.put("IPL2024", "https://m.cricbuzz.com/cricket-series/7607/indian-premier-league-2024/points-table");
    	hashMap.put("IPL2023", "https://m.cricbuzz.com/cricket-series/5945/indian-premier-league-2023/points-table");
    	hashMap.put("IPL2022", "https://m.cricbuzz.com/cricket-series/4061/indian-premier-league-2022/points-table");
    	hashMap.put("IPL2021", "https://m.cricbuzz.com/cricket-series/3472/indian-premier-league-2021/points-table");
    	hashMap.put("IPL2020", "https://m.cricbuzz.com/cricket-series/3130/indian-premier-league-2020/points-table");
//    	hashMap.put("IPL2019", "");
//    	hashMap.put("IPL2018", "");
//    	hashMap.put("IPL2017", "");
//    	hashMap.put("IPL2016", "");
//    	hashMap.put("IPL2015", "");
//    	hashMap.put("IPL2014", "");
    	hashMap.put("CWC2019", "https://m.cricbuzz.com/cricket-series/2697/icc-cricket-world-cup-2019/points-table");
    	hashMap.put("CWC2015", "https://m.cricbuzz.com/cricket-series/2223/icc-cricket-world-cup-2015/points-table");
        return new ResponseEntity<>(this.cricketService.getPointTable(hashMap.get(matchName)), HttpStatus.OK);
    }
    
    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(this.cricketService.getAllMatches(), HttpStatus.OK);
    }
}
