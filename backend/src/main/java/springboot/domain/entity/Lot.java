package springboot.domain.entity;

import java.math.BigInteger;
import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name="lots")
public class Lot {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	public int lot;
	
	@Column(name="timecode")
	public int timecode;
	
	@Column(name="pressure")
	public BigInteger pressure;
	
	@Column(name="layout")
	public int layout;
	
	@Column(name="component")
	public String component;
	
	@Column(name="color")
	public String colorbound;
	
	@Column(name="quality")
	public String quality;
	
	@Column(name="performance")
	public String performance;
	
	@Column(name="result")
	public boolean result;
	
	@Column(name="offset")
	public int offset;
	
	@Column(name="date")
	public Date date;
}
