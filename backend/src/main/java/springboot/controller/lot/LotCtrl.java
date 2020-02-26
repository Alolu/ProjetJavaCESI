package springboot.controller.lot;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.mail.Multipart;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import springboot.domain.entity.Lot;
import springboot.domain.entity.LotFile;
import springboot.service.lot.LotService;

@RestController
@RequestMapping("/api")
public class LotCtrl {

	@Autowired
	private LotService lotServ;
	
	@GetMapping(path = "/get/lots")
    @ResponseBody
    public List<Lot> getLots() {
		return lotServ.getLots();
	}
	
	@RequestMapping(path="/post/lot",method=RequestMethod.POST, consumes = {"multipart/form-data"})
	public void postLot(@Valid @RequestParam("lotData") MultipartFile multipart) throws JsonParseException, JsonMappingException, IOException {
		LotFile lf = new ObjectMapper().readValue(multipart.getBytes(), LotFile.class);
		for(Lot lot : lf.lots) {
			lot.date = lf.date;
			lotServ.saveLot(lot);
		}
		
	}
}
